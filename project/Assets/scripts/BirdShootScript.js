#pragma strict
import System.Collections.Generic;
var BulletObject:GameObject;
var NumberOfObjects:int;
var FireRate:float;
var BulletSpeed:float;
var BulletList : List.<GameObject> = new List.<GameObject>();
function Start () {
	for(var i = 0; i < NumberOfObjects; i++)
	{
		var obj : GameObject = Instantiate(BulletObject, transform.position,Quaternion.identity);
		obj.gameObject.SetActive(false);
		BulletList.Add(obj.gameObject);
	}
}

function FixedUpdate () {
	if(Input.GetMouseButton(0))
	{
		InvokeRepeating("fire",0,FireRate);
	}
	else if(!Input.GetMouseButton(0))
	{
		CancelInvoke("fire");
	}

}
function fire()
{
	for(var x = 0; x < NumberOfObjects; x++)
	{
		if(!BulletList[x].activeInHierarchy)
		{
			BulletList[x].SetActive(true);
			BulletList[x].gameObject.transform.position = this.transform.position;
			BulletList[x].gameObject.rigidbody2D.AddForce(this.transform.up * BulletSpeed);
			break;
		}
	}
}