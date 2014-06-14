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
	if(Input.GetKeyDown(KeyCode.LeftControl))
	{
		Invoke("fire",0);
	}
}
function fire()
{
	for(var x = 0; x < NumberOfObjects; x++)
	{
		if(!BulletList[x].activeInHierarchy)
		{
			BulletList[x].SetActive(true);
			BulletList[x].gameObject.transform.position = Vector2((transform.position.x + 2) * transform.localScale.y,transform.position.y + 1);
			BulletList[x].gameObject.rigidbody2D.AddForce(Vector2(this.transform.localScale.x * -1,0) * BulletSpeed);
			return;
		}
	}
}