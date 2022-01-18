export function capitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export function remove_by_index(index,array)
{  
    return array.slice(0,index) + array.slice(index + 1, array.length)
}