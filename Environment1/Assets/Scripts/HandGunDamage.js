var DamageAmount : int =5;
var TargetDistance: float;
var AllowedRange: float=15;

///var TheBlood:GameObject;

function Update(){
  if(GlobalAmmo.LoadedAmmo>=1){
	if(Input.GetButtonDown("Fire1")){
		var shot : RaycastHit;
		 if(Physics.Raycast(transform.position,transform.TransformDirection(Vector3.forward),shot)){
		 	TargetDistance=shot.distance;
		 		if(TargetDistance < AllowedRange){
		 			shot.transform.SendMessage("DeductPoints",DamageAmount,SendMessageOptions.DontRequireReceiver);
		 		}
		 	}
		 }
	}
}

/*var DamageAmount : int =5;
var TargetDistance: float;
var AllowedRange: float=15;

var hit:RaycastHit;
var TheBlood:GameObject;
var theBullet:GameObject;

function Update(){
  if(GlobalAmmo.LoadedAmmo>=1){
	if(Input.GetButtonDown("Fire1")){
		var shot : RaycastHit;
		 if(Physics.Raycast(transform.position,transform.TransformDirection(Vector3.forward),shot)){
		 	TargetDistance=shot.distance;
		 		if(TargetDistance < AllowedRange){
		 			shot.transform.SendMessage("DeductPoints",DamageAmount);
		 			   if(Physics.Raycast(transform.position,transform.TransformDirection(Vector3.forward),hit)){
		 			   	 if(hit.transform.tag=="BoxingEnemy"){
		 			   	 	Instantiate(TheBlood,hit.point,Quaternion.FromToRotation(Vector3.up,hit.normal));
		 			   	 	}
		 			   	 	if(hit.transform.tag=="Spider"){
		 			   	 		Instantiate(TheBlood,hit.point,Quaternion.FromToRotation(Vector3.up,hit.normal));
		 			   	 	}
		 			   	 	if(hit.transform.tag=="Untagged"){
		 			   	 		Instantiate(theBullet,hit.point,Quaternion.FromToRotation(Vector3.up,hit.normal));
		 			   	 	}
		 			  	 }
		 		   }
		 	 }
		}
	}
}*/