var Botones = ["7","8","9","+","4","5","6","-",
       	        "3","2","1","*","0",".","=","/"];

var ComponenteCalculadora = React.createClass({
    getInitialState: function() {
        return {
            data: this.props.data,
            txtSalida: 0
        };
    },
    EvaluaColores: function(it) {
        var nombreClase = 'primary';
        var signos = ['+', '-', '*', '/'];
        if(signos.indexOf(it) > -1) {nombreClase = 'success';}
        if(it == '=') {nombreClase = 'warning';}
        return nombreClase;
    },
    BorrarPantalla: function() {
        
    },
    EvaluarBotones: function(itemPresionado) {
        
    },
    render: function() {
        var self = this;
        var mBottom = {marginBottom: '10px'};
        var ClaseBotones = 'btn-lg btn-block btn btn-';
        var ListaBotones = this.state.data.map(function(item) {
           return <div className='col-md-3' style={mBottom}>
               <input type="button" className={ClaseBotones + (self.EvaluarColores(item))} value={item}/>
           </div> 
        });
    }
});