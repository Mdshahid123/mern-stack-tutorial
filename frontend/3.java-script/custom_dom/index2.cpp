#define UNICODE
#define _UNICODE
#include <windows.h>
#include <vector>
#include <string>

using namespace std;

struct UIElement {
    wstring type;         // "window", "header", "button"
    wstring text;
    int x, y, width, height;
    COLORREF bgColor;
    vector<UIElement*> children;
    HWND hwnd = NULL;     // Handle to actual Win32 object

    UIElement(wstring t, wstring txt, int _x, int _y, int w, int h, COLORREF bg)
        : type(t), text(txt), x(_x), y(_y), width(w), height(h), bgColor(bg) {}
};

// Global root (like document)
UIElement* root = nullptr;

// Forward declarations
void render(UIElement* node, HWND parent, HINSTANCE hInst);
LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);

int WINAPI WinMain(HINSTANCE hInst, HINSTANCE, LPSTR, int nCmdShow) {
    const wchar_t CLASS_NAME[] = L"TreeWindow";

    WNDCLASS wc = {};
    wc.lpfnWndProc = WndProc;
    wc.hInstance = hInst;
    wc.lpszClassName = CLASS_NAME;
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);

    RegisterClass(&wc);

    HWND hwnd = CreateWindowEx(
        0,
        CLASS_NAME,
        L"Tree Structured UI",
        WS_OVERLAPPEDWINDOW,
        CW_USEDEFAULT, CW_USEDEFAULT, 600, 400,
        NULL, NULL, hInst, NULL
    );

    ShowWindow(hwnd, nCmdShow);
    UpdateWindow(hwnd);

    // 🧱 Build UI Tree (like DOM)
    root = new UIElement(L"window", L"Main Window", 0, 0, 600, 400, RGB(255, 255, 255));
    UIElement* header = new UIElement(L"header", L"", 0, 0, 600, 60, RGB(0, 120, 255));
    UIElement* aboutBtn = new UIElement(L"button", L"About", 20, 15, 100, 30, RGB(255, 255, 255));
    UIElement* contactBtn = new UIElement(L"button", L"Contact", 140, 15, 100, 30, RGB(255, 255, 255));
    UIElement* infoBtn = new UIElement(L"button", L"Info", 260, 15, 100, 30, RGB(255, 255, 255));

    header->children.push_back(aboutBtn);
    header->children.push_back(contactBtn);
    header->children.push_back(infoBtn);
    root->children.push_back(header);

    // Render entire tree
    render(root, hwnd, hInst);

    // Standard Windows message loop
    MSG msg;
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    return 0;
}

// 🧩 Recursive render function
void render(UIElement* node, HWND parent, HINSTANCE hInst) {
    if (node->type == L"header") {
        node->hwnd = CreateWindowEx(
            0, L"STATIC", L"",
            WS_CHILD | WS_VISIBLE,
            node->x, node->y, node->width, node->height,
            parent, NULL, hInst, NULL
        );
        SetClassLongPtr(node->hwnd, GCLP_HBRBACKGROUND, (LONG_PTR)CreateSolidBrush(node->bgColor));
    }
    else if (node->type == L"button") {
        node->hwnd = CreateWindow(
            L"BUTTON", node->text.c_str(),
            WS_VISIBLE | WS_CHILD,
            node->x, node->y, node->width, node->height,
            parent, NULL, hInst, NULL
        );
    }

    for (auto child : node->children) {
        render(child, parent, hInst);
    }
}

// 🪟 Handle window events
LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam) {
    switch (msg) {
    case WM_PAINT: {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hwnd, &ps);
        RECT rect;
        GetClientRect(hwnd, &rect);
        SetBkMode(hdc, TRANSPARENT);
        SetTextColor(hdc, RGB(255, 255, 255));
        TextOut(hdc, 250, 20, L"MyWebsite", 9);
        EndPaint(hwnd, &ps);
        break;
    }

    case WM_DESTROY:
        PostQuitMessage(0);
        break;

    default:
        return DefWindowProc(hwnd, msg, wParam, lParam);
    }
    return 0;
}
