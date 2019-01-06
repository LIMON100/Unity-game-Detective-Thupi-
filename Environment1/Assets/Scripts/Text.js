var text: GameObject;
var activateText: boolean=false;

function Start(){
	text.SetActive(false);
}

function OnTriggerExit(){
	text.setActive(false);
}

function OnTriggerEnter(){
	text.SetActive(true);
	if(Input.GetKeyDown(KeyCode.E)){
		activateText=true;
	}
}

function Update(){
	if(activateText && Input.GetKey(KeyCode.E)){
		text.SetActive(true);
	}
}