var should = require('chai').should();
var expect = require('chai').expect;
const { executionAsyncId } = require('async_hooks');
var fs = require('fs');
var arrs = fs.readFileSync('arrays.js', 'utf8');
var { artData } = require('../artData.js');

describe('ARRAYS PROMPT #1', function () {
	try {
		eval(arrs);
	} catch (e) {
		console.log(e);
	}
	it('Returns an array of the correct length', function () {
		expect(titles).to.be.a('array');
		expect(titles.length).to.equal(10);
	});

	it('Returns the correct values', function () {
		expect(titles).to.deep.equal([
			'Italian Landscape with a Draughtsman',
			'The Milkmaid',
			'Floral Still Life',
			'Woman Reading a Letter',
			'The Merry Family',
			'The Holy Kinship',
			'Fishing for Souls',
			'Shiva Nataraja',
			'The bodhisattva Manjushri',
			' The Art Gallery of Jan Gildemeester Jansz',
		]);
	});
});

describe('ARRAYS PROMPT #2', function () {
	try {
		eval(arrs);
	} catch (e) {
		console.log(e);
	}
	it('Returns an array of the correct length', function () {
		expect(titleAndArtistInfo).to.be.a('array');
		expect(titleAndArtistInfo.length).to.equal(10);
	});

	it('Returns the correct values', function () {
		expect(titleAndArtistInfo).to.deep.equal([
			{ title: 'Italian Landscape with a Draughtsman', artist: 'Jan Both' },
			{ title: 'The Milkmaid', artist: 'Johannes Vermeer' },
			{ title: 'Floral Still Life', artist: 'Hans Bollongier' },
			{ title: 'Woman Reading a Letter', artist: 'Johannes Vermeer' },
			{ title: 'The Merry Family', artist: 'Jan Havicksz. Steen' },
			{ title: 'The Holy Kinship', artist: 'Geertgen tot Sint Jans' },
			{
				title: 'Fishing for Souls',
				artist: 'Adriaen Pietersz. van de Venne',
			},
			{ title: 'Shiva Nataraja', artist: 'anonymous' },
			{ title: 'The bodhisattva Manjushri', artist: 'anonymous' },
			{
				title: ' The Art Gallery of Jan Gildemeester Jansz',
				artist: 'Adriaan de Lelie',
			},
		]);
	});
});

describe('ARRAYS PROMPT #3', function () {
	try {
		eval(arrs);
	} catch (e) {
		console.log(e);
	}
	it('Returns an array of the correct length', function () {
		expect(imageElements).to.be.a('array');
		expect(imageElements.length).to.equal(10);
	});

	it('Returns the correct values', function () {
		expect(imageElements).to.deep.equal([
			'<img src="https://lh3.googleusercontent.com/0G5nN9xiSRIj6SJ0fi2ifDbcDST3QOFafjVXUSPNb5hqnr_gF_DKJdO1QiGcQ97V3y9zon-n1GSGL3cRPORXE3UzDIsk=s0" alt="Italian Landscape with a Draughtsman" />',
			'<img src="https://lh3.googleusercontent.com/cRtF3WdYfRQEraAcQz8dWDJOq3XsRX-h244rOw6zwkHtxy7NHjJOany7u4I2EG_uMAfNwBLHkFyLMENzpmfBTSYXIH_F=s0" alt="The Milkmaid" />',
			'<img src="https://lh3.googleusercontent.com/D2IPnfkJPa8cPSuhehu5e2aeteqzK5Zb0OzL9-zA4_FHBQHrD8RLT_3XZ9FDYtE64e_cdqTxZF_VfG4MsPcKr90FV6E=s0" alt="Floral Still Life" />',
			'<img src="https://lh3.googleusercontent.com/n7X03-aBMaHLQmd9UZXy0WSO81bLI376BMv8tjXfah_-BqdJURY-FoyX_YJKj5WuV5j3P8rLNEHM-T8jJztag9FQZkD3=s0" alt="Woman Reading a Letter" />',
			'<img src="https://lh3.googleusercontent.com/7JF0tll1eAfY8XgFHJ6Iq_e1xux4xgcT8_LxMfVbZdRMC5CX5KsXLH1DLlMEfuTfKX8kehtmhJyzJSBFEBDPFmeB6Y8=s0" alt="The Merry Family" />',
			'<img src="https://lh3.googleusercontent.com/qjkiSAC89H2lvsgogjCe6WGLzMFNgdoCLHwRngvUX6BACTFTggkzIXE99tz9Em-hTf44MS9YeRsxCjDkW7tfC9lprw=s0" alt="The Holy Kinship" />',
			'<img src="https://lh3.googleusercontent.com/hW-VHwzu0W0pvuTVVnx2vSCnO__rILy0Auxqz8L4TWVC0VWWaxrSGRDqGIBqKdl5nIINoxOlkFtlTNQQdsP3eOOhXw=s0" alt="Fishing for Souls" />',
			'<img src="https://lh5.ggpht.com/vV5DJTpPEL5dOCFmytemK61JuTSX_9SQKI11U7uAhm4WB48zX6oyv8rXbBwYrSb7tPXUhERrROL8k2P9C5Q0NiOpCbs=s0" alt="Shiva Nataraja" />',
			'<img src="https://lh3.ggpht.com/dEcAzU3879u6p7WXKY9L-BUuOInJYOsp6J_C-2v-gcYHNZVrkz8ZbCb6fL4g6WH4lBaTdNpOOKiMDgJraCo3hX2pmQ=s0" alt="The bodhisattva Manjushri" />',
			'<img src="https://lh3.googleusercontent.com/vkoS9jmZLZWuWH1LNIG3eJUVI6W7XqOUKmFf_lcuB4m1nJydWPXZGggi3XGwmirNj1wLdiO7sH6x5fJ60XJnH2expg=s0" alt=" The Art Gallery of Jan Gildemeester Jansz" />',
		]);
	});

});

describe('ARRAYS PROMPT #4', function () {
	try {
		eval(arrs);
	} catch (e) {
		console.log(e);
	}
	it('Returns a number with the correct value', function () {
		expect(numberOfAnonymousCreators).to.be.a('number');
		expect(numberOfAnonymousCreators).to.equal(2);
	});
});
