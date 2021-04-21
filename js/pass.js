        var users = [{
                username: 'nuuiiadmin',
                password: 'secretproject'
            },
        ];

        var button = document.getElementById('btn');

        button.onclick = function() {
            var username = document.getElementById('user').value;
            var password = document.getElementById('pass').value;

            for (var i = 0; i < users.length; i++) {
                if (username == users[i].username && password == users[i].password) {
                    window.location.href = 'http://some.kngmlnr.com/home.html';
                    break;
                } else {
                    alert('Something is not correct, give it another try!');
                }
            }
        }