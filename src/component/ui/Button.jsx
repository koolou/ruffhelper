import React, {PropTypes} from 'react';
export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //初始化渲染执行之后立刻调用
    }

    componentDidUpdate(prevProps) {
        //在组件的更新已经同步到 DOM 中之后立刻被调用
    }

    onMouseOver() {
        if (this.props.onMouseOver) {
            this.props.onMouseOver(this.refs.button);
        }

    }

    onMouseOut() {
        if (this.props.onMouseOut) {
            this.props.onMouseOut(this.refs.button);
        }

    }

    render() {
        var self = this;
        var getIcon = function () {
            var className = '';
            if (!self.props.iconName) {
                className = ''
            } else {
                className = `iconfont ${self.props.iconName}`
            }
            return <div className={className}/>
        }
        // console.log('this.props.disabled:',this.props.disabled)
        var className = `JUI JButton ${this.props.className}`;
        // {this.props.disabled}
        return (
            <button ref="button" className={className} disabled={this.props.disabled} style={this.props.style}
                    onClick={this.props.onClick}
                    onMouseOver={this.onMouseOver.bind(this)}
                    onMouseOut={this.onMouseOut.bind(this)}>
                <div style={{margin: 'auto'}}>
                    {getIcon()}
                    {this.props.value}
                </div>
            </button>
        )
    }
}
// <div style={{position:'relative'}}>
//
// </div>
// <div style={{position:'relative'}}>
// {this.props.value}
// </div>
// <div className="clear"/>
// {getIcon()}
Button.propTypes = {
    className: PropTypes.string,//样式的名字
    style: PropTypes.object,//样式
    iconName: PropTypes.string,//图标的名称
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//要显示的值
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
}