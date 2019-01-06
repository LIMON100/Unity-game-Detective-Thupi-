var EnemyHealth: int =10;
var Enemy:GameObject;

function DeductPoints(DamageAmount:int){
	EnemyHealth -= DamageAmount;
}

function Update(){
	if(EnemyHealth <= 0){
		this.GetComponent("Villain2").enabled=false;
		Enemy.GetComponent.<Animation>().Play("Stomp@Idle@Dying Backwards");
		EnemyHealth=1;
	}
}