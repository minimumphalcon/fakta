
var hayStack = '.n@fktearogl';
var fool = [4,9,1,5,9,8,2,3,7,4,5,7,3,9,8,11,7,10,6,5,0,1,9];

var kontor = {
    getMessage: function() {
        var message = '';
        for (var i = 0; i < fool.length; i++) {
            message += hayStack[fool[i]];
        }
        return message;
    },
    render: function() {
        document.getElementById("kontor").innerHTML = kontor.getMessage();
    }
}

kontor.render();