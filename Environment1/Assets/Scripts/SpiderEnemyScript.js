var EnemyHealth: int =30;
var TheSpider:GameObject;

function DeductPoints(DamageAmount:int){
	EnemyHealth -= DamageAmount;
}

function Update(){
	if(EnemyHealth <= 0){
		this.GetComponent("SpiderFallout").enabled=false;
		TheSpider.GetComponent.<Animation>().Play("die");
		EnemyHealth=1;
	}
}