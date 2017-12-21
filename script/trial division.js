var input_number = 1000;
var primes = [2, 3];

function is_prime(number) {
	if (number % 2 == 0) {
   		return false;
	} else if (number % 3 == 0) {
		return false;
    }

   for (k = 4; k <= Math.sqrt(number); k += 1) {
		if (n % k == 0) {
   	  		return false;
   	  	}
    } 

   return true;
}

for (n = 4; n < input_number; n += 1) {
   if (is_prime(n)) {
   	  primes.push(n);
   }
}

alert(primes)