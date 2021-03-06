/**x右侧上方的信息区域*/
import React from 'react';
import {connect} from 'react-redux';
import {tr, cutCharToCenter} from '../../lib/Utils';
import {shell} from 'electron';
import ExtraButton from './ExtraButton';
import {command, addLog,LOG_CLEAN,COLOR_RED } from '../../actions/AppActions';
class InfoArea extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //初始化渲染执行之后立刻调用
    }

    componentDidUpdate(prevProps) {
        //在组件的更新已经同步到 DOM 中之后立刻被调用
    }

    render() {
        var projectPath = this.props.ruffProjectPath;
        // console.log(11, projectPath)
        var strPath = projectPath ? projectPath : tr(54);//54 请先选择 Ruff 项目
        strPath = `[${cutCharToCenter(strPath, 48)}]`
        var stylePath = projectPath ? {} : {color: '#ffccff'}
        return (
            <div className="infoArea unselectable">
                <div className="rapVersion">
                    <div style={{display: 'flex', height: '100%'}}>
                        <div style={{margin: 'auto'}}>Rap Version:{this.props.rapVersion}</div>
                    </div>
                </div>
                <div className="projectPath" style={stylePath}>{strPath}</div>
                <ExtraButton id={0} onClick={() => {
                    shell.openItem(this.props.ruffProjectPath);
                } }/>
                <ExtraButton id={1} />
                <ExtraButton id={2} onClick={()=>{
                    command(LOG_CLEAN);
                    setTimeout(()=>{
                        addLog(tr(200, tr(16)), COLOR_RED);////200 执行命令：清除调试日志
                    },100)
                }}/>
                <div style={{clear: 'both'}}/>
            </div>
        )
    }
}
function select(state) {
    return {
        rapVersion: state.config.rapVersion,
        ruffProjectPath: state.config.ruffProjectPath
    }
}
export default connect(select)(InfoArea);