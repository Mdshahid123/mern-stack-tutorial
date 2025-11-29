#define UNICODE
#define _UNICODE
#include <windows.h>


#include <windows.h>

LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);

// Button handles
HWND hAboutBtn, hContactBtn, hInfoBtn;
HWND hoveredBtn = NULL;

int WINAPI WinMain(HINSTANCE hInst, HINSTANCE, LPSTR, int nCmdShow) {
    const wchar_t CLASS_NAME[] = L"HeaderWindow";

    WNDCLASS wc = {};
    wc.lpfnWndProc = WndProc;
    wc.hInstance = hInst;
    wc.lpszClassName = CLASS_NAME;
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);

    RegisterClass(&wc);

    HWND hwnd = CreateWindowEx(
        0,
        CLASS_NAME,
        L"Header Example",
        WS_OVERLAPPEDWINDOW,
        CW_USEDEFAULT, CW_USEDEFAULT, 600, 400,
        NULL, NULL, hInst, NULL
    );

    ShowWindow(hwnd, nCmdShow);
    UpdateWindow(hwnd);

    MSG msg;
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return 0;
}

void DrawHeader(HDC hdc, RECT rect) {
    HBRUSH headerBrush = CreateSolidBrush(RGB(0, 120, 255));
    FillRect(hdc, &rect, headerBrush);
    DeleteObject(headerBrush);

    SetBkMode(hdc, TRANSPARENT);
    SetTextColor(hdc, RGB(255, 255, 255));
    DrawText(hdc, L"MyWebsite", -1, &rect, DT_SINGLELINE | DT_VCENTER | DT_CENTER);
}

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam) {
    switch (msg) {
    case WM_CREATE:
        // Create buttons (header links)
        hAboutBtn = CreateWindow(L"BUTTON", L"About",
            WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
            20, 10, 100, 30, hwnd, NULL, NULL, NULL);

        hContactBtn = CreateWindow(L"BUTTON", L"Contact",
            WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
            140, 10, 100, 30, hwnd, NULL, NULL, NULL);

        hInfoBtn = CreateWindow(L"BUTTON", L"Info",
            WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
            260, 10, 100, 30, hwnd, NULL, NULL, NULL);
        break;

    case WM_MOUSEMOVE: {
        POINT pt = { LOWORD(lParam), HIWORD(lParam) };
        HWND prevHover = hoveredBtn;
        HWND newHover = NULL;

        RECT aboutRect = { 20, 10, 120, 40 };
        RECT contactRect = { 140, 10, 240, 40 };
        RECT infoRect = { 260, 10, 360, 40 };

        if (PtInRect(&aboutRect, pt)) newHover = hAboutBtn;
        else if (PtInRect(&contactRect, pt)) newHover = hContactBtn;
        else if (PtInRect(&infoRect, pt)) newHover = hInfoBtn;

        if (newHover != prevHover) {
            hoveredBtn = newHover;
            InvalidateRect(hwnd, NULL, TRUE);
        }
        break;
    }

    case WM_PAINT: {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hwnd, &ps);

        RECT rect;
        GetClientRect(hwnd, &rect);

        // Draw header background
        RECT headerRect = { 0, 0, rect.right, 60 };
        HBRUSH headerBrush = CreateSolidBrush(RGB(0, 120, 255));
        FillRect(hdc, &headerRect, headerBrush);
        DeleteObject(headerBrush);

        // Draw hover effect
        if (hoveredBtn) {
            RECT hoverRect;
            if (hoveredBtn == hAboutBtn) hoverRect = { 20, 10, 120, 40 };
            else if (hoveredBtn == hContactBtn) hoverRect = { 140, 10, 240, 40 };
            else if (hoveredBtn == hInfoBtn) hoverRect = { 260, 10, 360, 40 };

            HBRUSH hoverBrush = CreateSolidBrush(RGB(255, 255, 255));
            FillRect(hdc, &hoverRect, hoverBrush);
            DeleteObject(hoverBrush);

            SetBkMode(hdc, TRANSPARENT);
            SetTextColor(hdc, RGB(0, 120, 255));

            const wchar_t* text =
                (hoveredBtn == hAboutBtn) ? L"About" :
                (hoveredBtn == hContactBtn) ? L"Contact" : L"Info";

            DrawText(hdc, text, -1, &hoverRect, DT_SINGLELINE | DT_CENTER | DT_VCENTER);
        }

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
