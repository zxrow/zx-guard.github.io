var url = '';
            var count = 60; // dalam detik
            var count1 = 23;
            var count2 = 59;
            function countDown() {
                if (count > 0) {
                    count--;
                    var waktu = count + 1;
                    var waktu1 = count1;
                    var waktu2 = count2;
                    $('#waktu').html('' + waktu1 + ':' + waktu2 + ':' + waktu + '');
                    setTimeout("countDown()", 1000);
                } else {
                    window.location.href = url;
                }
            }
            countDown();
