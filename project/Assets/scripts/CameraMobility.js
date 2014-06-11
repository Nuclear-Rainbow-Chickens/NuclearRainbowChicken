#pragma strict
private var bird:Transform;
var speed:float;
private var DistanceX:float;
private var DistanceY:float;
function Start () {
	bird = GameObject.Find("bird").transform;
}

function Update () {
	if(DistanceX > 12)
	{
		rigidbody2D.AddForce(Vector2(-1,0) * speed * DistanceX);
	}
	if(DistanceX < 12)
	{
		rigidbody2D.AddForce(Vector2(1,0) * speed * DistanceX * -1);
	}
	if(DistanceY > 10)
	{
		rigidbody2D.AddForce(Vector2(0,-1) * speed * DistanceY);
	}
	if(DistanceY < 10)
	{
		rigidbody2D.AddForce(Vector2(0,1) * speed * DistanceY * -1);
	}
	DistanceX = transform.position.x - bird.position.x;
	DistanceY = transform.position.y - bird.position.y;
}