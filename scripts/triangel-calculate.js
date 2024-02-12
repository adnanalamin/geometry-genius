function calculateTriangleArea(){
    // Get Triangle Basr value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);

    // Get Triangle Height Value

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    // Calculate area
    const area = 0.5 * base * height;
    console.log('Area of the Triangle is :', area);

    // Display area
    const displayArea = document.getElementById('triangle-area');
    displayArea.innerText = area;
}