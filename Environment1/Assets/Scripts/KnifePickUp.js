var itemInCamera : GameObject; 
var itemOnTheGround : GameObject; 
var pickUpSound : AudioClip;
var text : GameObject;
///var icon : GameObject;
var activateTrigger : boolean = false; 
var moveTrigger : boolean = false;

function Start () {
	Screen.lockCursor=true;
	text.SetActive(false);
	itemInCamera.SetActive(false);	
	itemOnTheGround.SetActive(true);
	///icon.SetActive(false);
	activateTrigger = true; 
}


function OnTriggerExit () {

	activateTrigger = false;
}

function OnTriggerEnter () 
{
	activateTrigger = true;

	if(Input.GetKeyDown(KeyCode.E))
	{
		activateTrigger = true;
		moveTrigger = true;
	}
}

function Update () 
{
	if (activateTrigger && Input.GetKey(KeyCode.E))
	{
		itemInCamera.SetActive(true); 
		itemOnTheGround.SetActive(false);
		///icon.SetActive(true);
		activateTrigger = false;
		moveTrigger = true;
		AudioSource.PlayClipAtPoint(pickUpSound, transform.position);
	}

	if (moveTrigger) 
	{
		transform.Translate(Vector3(0,0,1));
	}
}


        