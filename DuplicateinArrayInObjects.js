function checkDuplicateInObject(propertyName, inputArray){
	testObj = {}

	inputArray.map(item => {
		let itemPropertyName = item[propertyName]
		if(itemPropertyName in testObj){
			testObj[itemPropertyName].duplicate = true
		} else {
			testObj[itemPropertyName] = item
		}
	})

	return testObj
}