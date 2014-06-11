#pragma strict

var speed:float = 50;
var JumpHeight:float = 50;
var CanJump = true;
function Start () {

}

function FixedUpdate () {
	rigidbody2D.AddForce(Vector3(Input.GetAxis("Horizontal"),0,0) * speed);
	if(Input.GetAxis("Horizontal") < 0)
	{
		transform.localScale = Vector3(1, transform.localScale.y, transform.localScale.z);
	}
	else if(Input.GetAxis("Horizontal") > 0)
	{
		transform.localScale = Vector3(-1, transform.localScale.y, transform.localScale.z);
	}
	if(Input.GetKey(KeyCode.Space) && CanJump == true)
	{
		rigidbody2D.AddForce(Vector3.up * JumpHeight);
		CanJump = false;
	}
	
}
function OnCollisionEnter2D( other : Collision2D)
{
	if(other.collider.gameObject.tag == "Platform")
	{
		CanJump = true;
	}
}