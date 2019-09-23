let axiom='mi'

//Rules of Production
function ruleA(string) {
if (string[string.length - 1] == 'i') {

string=string+'u';
res=string;

} else {
res = false;
}

return res;
}
