// collect response from all resolved promises.

function allSettled (promises) {
				const url = ''
        return Promise.all(promises.map(({key}) => Promise.resolve(fetch(url)).then(value => ({
            status: 'fulfilled',
            value
          }), reason => ({
            status: 'rejected',
            reason
          }))))
        }
      
allSettled(tallyData)
	.then(data => {
		Promise.all(data.map((item) => {
			if (item.status === 'fulfilled') {
				return item.value.json() 
			}
		}))
			.then(data => console.log(data))
	})
