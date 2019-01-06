var flashlight : Light;
var soundOn : GameObject;
var soundOff : GameObject;
 
 
function Start () {
flashlight.enabled = false; 
} 
 
function Update () 
{
     
    if(Input.GetKeyDown(KeyCode.F)) // You can choose any button, im using the button F, rename it if you want a diffrent button to use.
    {
        if(flashlight.enabled == false)
        {
            flashlight.enabled = true;
            soundOn.GetComponent.<AudioSource>().Play();
        }
        else
        {
            flashlight.enabled = false;
            soundOff.GetComponent.<AudioSource>().Play();
 
        }
    }
}
