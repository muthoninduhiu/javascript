/*+ Homework Task
Let’s try to create new slang words from a list of letters. Create an array of
all the letters of the alphabet. Use indexing, slicing and any methods you
study to create the words “hi”, “def” and “nope”.
*/
let myAlphabets = ['a', 'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k' ,'l' ,'m','n'
                    ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let hi = myAlphabets.slice(7,9).join('')

let def = myAlphabets.slice(3,6).join('')
let e_nope = myAlphabets.slice(4,5)
let nope = myAlphabets.slice(13,16).join('')

let full_nope = nope.concat(e_nope)
// let hello = concat(x)
console.log('==================================')
console.log('MY GREETINGS HOMEWORK')
console.log(hi)
console.log(def)
console.log(full_nope)
console.log('==================================')