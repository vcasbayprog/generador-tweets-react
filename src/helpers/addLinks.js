
export const addLinks = paragraph => {
    const array = paragraph.split(" ");
    let newText = "";
    array.map(item => {
        if (item.includes("@") || item.includes("#") || item.includes("http")) {
            newText += `<span>${item}</span> `
        } else {
            newText += `${item} `
        }
    })
    return newText;
}