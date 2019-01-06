var Ammosound:AudioSource;

function OnTriggerEnter(col:Collider)
{

	Ammosound.Play();
	if(GlobalAmmo.LoadedAmmo==0){
		GlobalAmmo.LoadedAmmo+=10;
		this.gameObject.SetActive(false);
	}

	else{
		GlobalAmmo.CurrentAmmo+=10;
		this.gameObject.SetActive(false);
	}

}