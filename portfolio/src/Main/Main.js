import React, {Component} from 'react';
import "./Main.css";
import github from '../Images/github.svg';
import linkedin from '../Images/linkedin.png';
import email from '../Images/email.png';
class Main extends Component {

header = () => {
    return(
        <div className="header">
            <div className="headername">
                <h1>
                    Jonathan Vega
                </h1>
            </div>
            <div className="list">
            <ul>
                <li><a class="active" href="#home"><img src={github}/></a></li>
                <li><a href="#news"><img src={linkedin}/></a></li>
                <li><a href="mailto:jonnyv212@hotmail.com?Subject=Hello"><img src={email}/></a></li>
            </ul> 
            </div>
        </div>

        )
}
nav = () => {
    return(
        <div>
            <p>
                Jonathan Vega
            </p>
            <ul>
                <li><a class="active" href="#home">About</a></li>
                <li><a href="#news">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>   
        </div>
    )
}


portfolio = () =>{
    return(
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus sagittis dolor, vitae fermentum purus. Duis et massa eget arcu rutrum egestas ut id tortor. Integer maximus imperdiet sem, ullamcorper feugiat turpis dictum nec. Donec bibendum, nisl nec tincidunt dapibus, lacus neque cursus augue, in finibus nulla nunc quis nibh. Phasellus eu blandit elit. Praesent pellentesque elit erat, id laoreet purus lobortis non. Fusce scelerisque risus sed sapien tempor, ac sollicitudin lacus commodo. Integer congue, nunc malesuada ornare condimentum, dui est lobortis nulla, et malesuada mi velit in felis. Phasellus pretium posuere massa id hendrerit. Nunc quis erat nibh. Sed dui eros, hendrerit at sem in, tincidunt iaculis tortor. Aenean quis massa quis odio facilisis blandit sit amet in massa. Sed tincidunt, mi a interdum consectetur, nulla augue porttitor ligula, hendrerit facilisis ligula tortor at enim.

Donec consequat, lacus vel porta maximus, leo mi laoreet tellus, quis bibendum metus dolor in mauris. Aliquam blandit elementum lacus eu congue. Mauris vitae diam eleifend, luctus nibh vitae, porttitor ligula. Vestibulum dictum et velit nec malesuada. Suspendisse vel mollis urna, ut consequat ex. Phasellus eu quam diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pellentesque ornare nibh sed bibendum. Sed volutpat posuere semper. Nam semper porta metus, a aliquam justo ultricies sed. Ut aliquam hendrerit volutpat.

Fusce posuere nulla erat. Quisque eget cursus metus. Vivamus pharetra ex eget porttitor vestibulum. Vestibulum congue est a leo viverra commodo. Aliquam erat volutpat. Morbi elementum lectus elit, rhoncus ultricies est vestibulum vitae. Nullam commodo finibus tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam lectus erat, lobortis at euismod nec, iaculis sed metus. Integer ullamcorper felis sit amet diam suscipit, id pulvinar lectus sodales. Vivamus molestie sollicitudin gravida. Pellentesque at hendrerit augue, at tempor lacus. Sed pretium mi at velit semper, sit amet condimentum lorem luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Morbi sit amet egestas justo. Vivamus vitae facilisis orci. Duis at ligula turpis. Vestibulum mollis fringilla neque sed maximus. In nec diam in tortor sodales dictum. Integer luctus, sem non aliquam mollis, dolor metus tincidunt lectus, ut porta justo mauris ac tortor. Proin viverra, risus eget aliquam rhoncus, velit magna pellentesque felis, ac sodales massa metus sit amet erat. Suspendisse eu massa ac ligula sagittis posuere vel et purus.

Proin eleifend neque quam, non accumsan velit vulputate in. Vestibulum ac maximus nulla. Suspendisse sed pharetra mauris. Integer commodo rhoncus nunc, in dignissim sem tempus bibendum. Etiam ac dui at orci euismod commodo. Nullam pharetra posuere purus eget laoreet. Mauris vel magna id justo rutrum faucibus. Mauris vestibulum fringilla mi a sodales. Donec efficitur pulvinar pellentesque. Donec pretium, lacus id tincidunt laoreet, felis turpis cursus justo, lacinia blandit lectus urna quis augue. Curabitur orci enim, iaculis ut tempor eget, facilisis nec ex. Aenean blandit enim velit, commodo aliquet elit finibus nec.
            <hr/>
        </div>
    )
}
content = () => {
    return(
        <div>

            <div className="portfolio">
                {this.portfolio()}
            </div>
        </div>
    )
}
  render(){
    return(

    <div className="main">
        <div className="nav">
            {this.nav()}
        </div>

        <div>
            {this.header()}
        </div>

        <div className="content">
            {this.content()}
        </div>
     </div>
    )
  }
}

export default Main;
