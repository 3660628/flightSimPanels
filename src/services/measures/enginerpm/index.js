module.exports = function(config) {
    //all the information for this instrument are contained in the x-type 37
    //so we simply proxy and return that JSON object..
	return config.datarefs["37"];
};