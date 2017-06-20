import React from 'react';
import FlashCard from './FlashCard';

class FlashCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = { cards: [
														{
															title: 'Card' + this.id, 
															front: 'What is the difference between LET and CONST',
															back: "Let is localized, and Const cannot be reassigned"
														},
														{
															title: 'Card 2',
															front: "What does the => symbolize?", 
															back: 'Creating a function and returning a value'
														},
														{
															title: 'Card 3',
															front: 'What does a default parameter look like?',
															back: 'function foo (bar, blah = 7) {};'
														},
														{
                              title: 'Card 4', 
                              front: 'Name 12 methods we can call to manipulate an array', 
                              back: 'concat(),slice(),join(),sort(),lengthsplice(),pop(),toSource(),push(),toString(),reverse(),unshift(),shift(),valueOf()'
                            },
                            {
                              title: 'Card 5', 
                              front: 'Name a dozen methods we can call on strings', 
                              back: 'charAt(), slice(), charCo­deAt(), split(), concat(), substr(), fromCh­arC­ode(), substr­ing(), indexOf(), toLowe­rCase(), lastIn­dexOf(), toUppe­rCase(), lengthtoLoca­leL­owe­rCase()locale­Com­pare()toLoca­leU­ppe­rCase()match() xtoSource()replace() xvalueOf()'
                            },
                            {
                              title: 'Card 6', 
                              front: 'What must a variable name start with?', 
                              back: 'a letter, $, or _'
                            },
                            {
                              title: 'Card 7', 
                              front: 'What are the HTML DOM Mouse events?', 
                              back: 'onclick, ondblclick, mousedown, mousemove, mouseover, mouseout, mouseup'
                            },
                            {
                              title: 'Card 8', 
                              front: 'How can you find the last index in a string is?', 
                              back: 'string.length - 1'
                            },
                            {
                              title: 'Card 9', 
                              front: 'split() method does what?', 
                              back: 'splits a string into an array of substring and returns the new array\ne.x. string.split(separator,limit)\nx="hello world"\ndocument.write(x.split(" ",1))---> hello'
                            },
														{
															title: 'Card 11', 
															front: 'search() method does what?',
															back: 'Searches for a match between a regular expression and the string and returns the position\ne.x. string.search(regexp)\nx="hello world"\ndocument.write(x.search("wo"))--->7'
														},
														{
															title: 'Card 12',
															front: "replace() method does what??", 
															back: 'searches for a regexp or substring and replaces it with a new string.\ne.x. string.replace(regexp/substr,newstring)\nx="hello world"\ndocument.write(x.replace("hello","goodbye"))-->goodye world'
														},
														{
															title: 'Card 13',
															front: 'match() method does??',
															back: 'searches for a match between the regexp and a string and returns the matchs\ne.x. string.match(regexp)\nx="hello world"\ndocument.write(x.match("hello"))-->hello'
														},
														{
															title: 'Card 14', 
															front: 'indexOf() method does?',
															back: 'returns the position of the first found occurrence of a specified value in a string\ne.x. string.indexOf(searchstring,start)\nx="hello world"\ndocument.write(x.indexOf("world",0))-->7'
														},
														{
															title: 'Card 15',
															front: "lastIndexOf() method does what??", 
															back: 'returns the position of the last occurence of a specified value in a string.\ne.x. string.lastIndexOf(regexp,start)\nx="hello world"\ndocument.write(x.lastIndexOf("wo",0))--->7'
														},
														{
															title: 'Card 16',
															front: 'fromCharCode() method does what??',
															back: 'converts unicode values into characters [does not use strings]\ndocument.write(string.fromCharCode(72))--> H'
														},
														{
															title: 'Card 17', 
															front: 'concat() method does?',
															back: 'concat() method does?\njoins 2 or more strings then returns a copy.\ne.x. string.concat(string2)\nx="hello world "\ny="goodbye world"\ndocument.write(x.concat(y))--> hello world goodbye world'
														},
														{
															title: 'Card 18',
															front: "charCodeAt() method does??", 
															back: 'returns the unicode of the character at a specific index in a string.e.x. string.charCodeAt(index)x="hello world"\ndocument.write(x.charCodeAt(0))--->72'
														},
														{
															title: 'Card 19',
															front: 'charAt() method does??',
															back: 'returns the character at the specified index\ne.x. string.charAt(index)\nx="hello world"\ndocument.write(x.charAt(0))-->h'
														},
														{
															title: 'Card 20', 
															front: 'Do Pop, Push, and Shift alter the original array?',
															back: "yes"
														},
														{
															title: 'Card 21',
															front: "In RegEx, what does i modifier do?", 
															back: 'performs a case insensitive search'
														},
														{
															title: 'Card 22',
															front: 'In Regex, what does the g modifier do??',
															back: 'Performs a global match, instead of stopping at first found'
														},
														{
															title: 'Card 23', 
															front: 'What is a cookie?',
															back: "a cookie is a variable that is stored on a users computer."
														},
														{
															title: 'Card 24',
															front: "How do you test that a variable contains a valid number??", 
															back: 'isNaN(varHere); //Returns true or false.'
														},
														{
															title: 'Card 25',
															front: 'How do you write a line to the current element of the DOM??',
															back: 'document.writeln("Text Here"); //Advances to new line after text'
														},
													]
									};
	}

	deleteFlashCard = (id) => {
		return this.state.card
	};

	displayFlashCards = () => {
		return this.state.cards.map( (card, i) => {
			return(<FlashCard key={i} card={card} className='col m4'/>);
		});
	}

	render() {
	return(
		<div className="row individual">
		{ this.displayFlashCards() }
		</div>
		)
	}
}

export default FlashCards;













