import "./Main.css"
import React from "react";

class Main extends React.Component {

    componentDidMount() {
        console.log("[Main]     file: src/app/Main/Main.js")
        console.log("[Main]     props:", this.props)

        document.title = "СССР";

    }

    render() {
        return (
            <div className="main-body">
                <h2 className="main-font-center">
                    Приносим извинения, сервер развалился.
                </h2>
                <div className="main-pre">
                    <div className="main-code">
                        <span style={{color: "#00FF73"}}>gorbachev@ussr:~</span> $ sudo service collapse.ussr status<br />
                        <br />
                        &emsp;      <span style={{color: "#00FF73"}}>●</span> collapse.ussr.service - Lenin's script<br />
                        &emsp;         Loaded: loaded (/lib/systemd/system/collapse.ussr.service; enabled; vendor preset: enabled)<br />
                        &emsp;           Active: <span style={{color: "#ff0000"}}>inactive (dead)</span> since 1991-12-28 12:38:34 MSK;<br />
                        &emsp;             Docs: man:ussr(8)<br />
                        &emsp;      Main PID: 1 (collapse.ussr)<br />
                        &emsp;            Tasks: 2022 (limit: 1991)<br />
                        &emsp;               CPU: 69y 2h<br />
                    </div>
                </div>
                <p className={"main-font-center"}>
                    Если вы хотите купить домен свяжитесь: <a href={"https://vk.me/id370926160"}>vk.com</a>, <a href={"https://t.me/SantaSpeen"}>t.me</a>.
                </p>
                <footer>SSSR, 30.12.1922 - 26.12.1991</footer>
            </div>
        );
    }

}

export default Main;
