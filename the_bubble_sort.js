var a =[2,3,5,8,6,9,1];
var temp;
var len= a.length;
var i=0;
var j=1;

for( i =0;i<len;i++){
	for( j=0 ; j<len-i-1;j++ ){
		if(a[j]>a[j+1])
		{
			temp=a[j];
			a[j]=a[j+1];
			a[j+1]=temp;
			console.log(a);
		}
		
	}
}
// Awinash there
console.log(a);