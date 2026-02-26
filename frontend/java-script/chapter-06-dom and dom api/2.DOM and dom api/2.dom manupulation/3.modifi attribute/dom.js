//1)getting element attributes value

//syntax
getAttribute(attr)//it return the attribute value
     or
let attributevalue = node.attributename


//2)modifying a attribute value
// syntax
setAttribute(attr, value)
     or
node.attributename = "newattribute"

//3)adding new attribute to the element
setAttribute(attr, value)


// note: if we want to add a new attribute to the element using setAttribute() method and if the attribute is already exist then it will update the attribute value otherwise it will add a new attribute to the element.

//note2:getting attribute using attribute name not work if the attribute is custom attribute but getAttribute() method work for both standard and custom attribute.