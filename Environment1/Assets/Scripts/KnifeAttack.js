function Update()
{
	if(Input.GetMouseButtonDown(0)){
		GetComponent.<Animation>().Play("KnifeAttack");
	}
}

