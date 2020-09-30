module.exports = function toReadable (number) {
	let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let iNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let dozen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	let result = [];
	if(number >= 100) {
		result.push(units[parseInt(number / 100)] + ' hundred')
		if(number % 100 > 0) {
			number = number % 100
		} else {
			number
		}
	}

	if(number >= 20) {
		result.push(dozen[parseInt(number/10)]);
		result.push(units[parseInt(number % 10)])
	} else {
			
		if(number >= 10) {
			result.push(iNum[parseInt(number % 10)])
		} else {
			if(number >= 1) {
				result.push(units[number])
				} else {
					result.push(['zero'])
				}
		}
		
		
	}

	return result.join(' ').trim()
  
}
