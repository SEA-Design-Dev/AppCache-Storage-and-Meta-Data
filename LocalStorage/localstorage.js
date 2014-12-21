      var first = document.getElementById('first');
      var second = document.getElementById('second');

      first.value = localStorage.getItem('first');
      second.value = localStorage.getItem('second');

      first.addEventListener('input', function () {
        localStorage.setItem('first', first.value);
      }, false);

      second.addEventListener('input', function () {
        localStorage.setItem('second', second.value);
      }, false);
