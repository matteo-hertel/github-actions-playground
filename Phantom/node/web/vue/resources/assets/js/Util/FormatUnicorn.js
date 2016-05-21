/**
 * String formatting from Stackoverflow
 * http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 */

if (!String.prototype.format) {
    String.prototype.format = function() {
        var str = this.toString();
        if (!arguments.length)
            return str;
        var args = typeof arguments[0];
            args = (("string" == args || "number" == args) ? arguments : arguments[0]);
        for (let arg in args)
            str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), args[arg]);
        return str;
    };
}
