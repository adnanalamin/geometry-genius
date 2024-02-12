function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectanglr-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);


    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    const area = width * length;
    console.log('Area of the rectangle is :',area);

    const displayArea = document.getElementById('rectangle-area');
    displayArea.innerHTML = area;
}