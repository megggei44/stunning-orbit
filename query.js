'user strict';
var sql = require('./');

//I.Hàng hoá

var Shipment = function(shipment){
    this.sender_id = shipment.sender_id;
    this.transaction_send_point_id = shipment.transaction_send_point_id;
    this.receiver_id = shipment.receiver_id;
    this.transaction_receive_point_id = shipment.transaction_receive_point_id;
    this.type = shipment.type;
    this.text_name = shipment.text_name;
    this.text_message = shipment.text_message;
    this.day_sent = new Date(shipment.day_sent);
    this.day_received = new Date(shipment.day_received);
    this.sent_product = shipment.sent_product;
    this.received_product = shipment.received_product;
    this.sumprice = shipment.sumprice;
    this.maincharge = shipment.maincharge;
    this.surcharge = shipment.surcharge;
    this.traffic_charge = shipment.traffic_charge;
    this.sumcharge = shipment.sumcharge;
    this.special_charge = shipment.special_charge;
    this.weight = shipment.weight;
    this.statusf = shipment.statusf;
};

//tạo hàng hoá mới

Shipment.createShipment = function(newShipment, result) {
    sql.query("INSERT INTO Shipments SET ?", newShipment, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

// cập nhật thông tin hàng hoá 

Shipment.updateShipmentById = function(id, shipment, result){
    sql.query("UPDATE Shipments SET ? WHERE shipment_id = ?", [shipment, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

//xoá hàng hoá

Shipment.removeShipment = function(id, result){
    sql.query("DELETE FROM Shipments WHERE shipment_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Shipment;