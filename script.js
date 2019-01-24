var n, c = 0;
function navigate(n){
	if(n!=c)
	{
		var home = document.getElementsByClassName("home")[0];
		var rules = document.getElementsByClassName("rules")[0];
		var contacts = document.getElementsByClassName("contacts")[0];
		home.style.display = "none";
		rules.style.display = "none";
		contacts.style.display = "none";
		switch(n){
			case 0:
			{
				home.style.display = "block";
				c = 0;
				break;
			}
			case 1:
			{
				rules.style.display = "block";
				c = 1;
				break;
			}
			case 2:
			{
				contacts.style.display = "block";
				c = 2;
				break;
			}
			default:
		}
	}
}

var x=0;
function addMember(){
	x++;
	if(x<=3)
	{
		var parent = document.getElementsByClassName("members")[0];
		parent.appendChild(document.createElement("br"));
		parent.innerHTML += "<h4>- Member "+x+"</h4>";
		parent.appendChild(document.createElement("br"));
		parent.appendChild(document.createTextNode("Email "));
		var txtBox = document.createElement("input");
		txtBox.setAttribute("type", "text");
		parent.appendChild(txtBox);
		parent.appendChild(document.createElement("br"));
	}
}

function openReg(){
	var elem1 = document.getElementsByClassName("regContainer")[0];
	var elem2 = document.getElementsByClassName("register")[0];
	elem1.style.display = "block";
	elem2.style.transform = "translateY(0)";
	setTimeout(function(){
		elem1.style.opacity = 1;
	}, 1);
}

function closeReg(){
	var elem1 = document.getElementsByClassName("regContainer")[0];
	var elem2 = document.getElementsByClassName("register")[0];
	elem1.style.display = "none";
	elem2.style.transform = "translateY(-50%)";
	elem1.style.opacity = 0;
}

var prob = 0;
function nextProblem() {
		
	if(prob < 7)
	{
		prob++;
		probChange();
	}
	else
	{
		prob = 0;
		probChange();
	}
}
function prevProblem() {
		
	if(prob > 0)
	{
		prob--;
		probChange();
	}
	else
	{
		prob = 7;
		probChange();
	}
}


function probChange(){
	var head1 = document.getElementsByClassName("heading1")[0];
	var head2 = document.getElementsByClassName("heading2")[0];
	var content = document.getElementsByClassName("content")[0];
	var img = document.getElementsByClassName("main")[0];

	var h1 = document.createElement("H1");
	var t1 = document.createTextNode(problem.head1[prob]);
	h1.appendChild(t1);
	head1.innerHTML = "";
	head1.appendChild(h1);
	var h2 = document.createElement("H1");
	var t2 = document.createTextNode(problem.head2[prob]);
	h2.appendChild(t2);
	head2.innerHTML = "";
	head2.appendChild(h2);
	var p1 = document.createElement("p");
	var t3 = document.createTextNode(problem.content[prob]);
	p1.appendChild(t3);
	content.innerHTML = "";
	content.appendChild(p1);
	img.src = problem.img[prob];
}
var problem = 
{
    head1: ["daVinci", "Eric", "GE Hea", "Hacke", "IP", "Ha", "Rolls-", "GNO"],
    head2: ["Creations", "sson", "lthcare", "rEarth", "CA", "rVa", "Royce", "MIKX"],
    content: [
    "Da Vinci Creations is a New York-based company that specializes in the importation and marketing of Italian and German-made kitchens, bathroom cabinets and contemporary furniture to the United States. We go beyond managing the importation of the products, but also establish a business relationship between Italian and German companies and the U.S. counterpart.Go to: davinci-creations.com",
    "Ericsson is one of the leading brands in the field of networking and telecom headquartered in Stockholm. It offers services, software and infrastructure in IT for telecom operators,mobile and fixed broadband, operations and business support services,cable television, IPTV and video systems. It is presently working on the revolutionary 5G technology.",
    "​​​GE Healthcare is an American pharmaceutical company and medical equipment manufacturer. It is a subsidiary of General Electric (GE), formerly headquartered in Little Chalfont, Buckinghamshire, United Kingdom; in early 2016 headquarters were moved to Chicago. The company provides medical imaging and information technologies, medical diagnostics, patient monitoring systems, drug discovery, bio pharmaceutical manufacturing technologies and performance solutions services",
    "HackerEarth is a technology company that provides recruitment solutions. It helps companies find innovative solutions for their businesses. They love innovators who solve real world problems. It is also a platform for people to participate in hackathons and competitions and code their way into the industry. ​",
    "Ipca Laboratories is an international pharmaceutical company based in Mumbai, India. It produces Theo bromine, Acetylthiophene, and P-Bromo Toluene as Active Pharmaceutical Ingredients (APIs). Ipca sells these APIs and their intermediates world over. It produces more than 150 formulations that include oral liquids, tablets, dry powders, and capsules. The various kinds of drug intermediates that the company manufactures include Theo bromine, Acetylthiophene, and P- Bromo Toluene and promotes over 36 countries of Asia, Africa, CIS, and South America, including Cambodia, Kazakhstan, Kenya, Mauritius, Myanmar, Nigeria, Oman, Russia, Sri Lanka, Sudan, Tanzania, Ukraine, Vietnam and Yemen. The main activities of company are to produce and market pharmaceuticals and drugs. The various products of the company include formulations, drug intermediates, and active pharmaceutical ingredients (API).",
    "HarVa is an Indian Business process outsourcing Organization.It is the first NPO set up in rural India which employs only women.It also has a division, Community Based Farming & Waste Management, which trains men in latest farming techniques. The rural start up primarily focuses on Skill Development, BPO, Community based farming and Microfinance.",
    "Rolls-Royce is a global company providing highly-efficient integrated power and propulsion solutions. Our power systems are predominantly used in aerospace, marine, energy and off-highway applications.",
    "GNOMIKX is healthcare company. It offers personal genomics test for various lifestyle diseases like Diabetes, Obesity and Hypertension. Go to: gnomikx.com"
    ],
    img: ["svg/davinciCreations.JPG", "svg/eric_logo.svg", "svg/GE_Healthcare.jpg", "svg/hackerearth.jpg", "svg/Ipca.jpg", "svg/harva.jpeg", "svg/Rolls_royce.jpg", "svg/gnomikx.png"]
}

function viewProblem(){
	var home = document.getElementsByClassName("home")[0];
	var rules = document.getElementsByClassName("rules")[0];
	var contacts = document.getElementsByClassName("contacts")[0];
	home.style.display = "none";
	rules.style.display = "none";
	contacts.style.display = "none";
	var probElem = document.getElementsByClassName("prob")[0];
	probElem.style.display = "block";
}
function goHome(){
	var probElem = document.getElementsByClassName("prob")[0];
	probElem.style.display = "none";	
	home.style.display = "block";
}