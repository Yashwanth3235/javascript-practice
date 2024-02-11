function cats(name)
{
    let speak;
    if(name === 'coco')
    {
         speak = "meow coco";
    }
    else
    {
         speak ="not coco";
    }
    return speak;
}

let cat = cats('cocoa');
console.log(cat);