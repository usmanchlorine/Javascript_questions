let original_list=['kashmir','paris','london']
let x=[...original_list] // shallow copying changing the list does not change the original list 
console.log("my original list is  "+original_list)
console.log("this is sorted alphbetical order "+ x.sort())

console.log("my original list is  "+original_list)

console.log("this is reverse alphabetical order "+[...original_list].sort().reverse())




console.log("my original list is  "+original_list)


console.log("reversing order list is  "+original_list.reverse())

console.log("reversing order list again to real order is  "+original_list.reverse())