function DivByThree (i: number) {
	if (Number.isInteger(i/3))  return true;
	else return false;
}

function DivByFive (i: number) {
	if (Number.isInteger(i/5)) return true;
	else return false;
}

function Output (i: number, firstString: string, secondString: string) {
	if (DivByThree(i) && DivByFive(i)) return (firstString + secondString);
	else if (DivByThree(i)) return firstString;
	else if (DivByFive(i)) return secondString;
	else return i;
}

export {Output}
