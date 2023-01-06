const shorten = (title) =>{
    const splitedTitle = title.split(" ");
    const nweTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return nweTitle;
}
export {shorten} ; 