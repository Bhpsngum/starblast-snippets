try {
  let u = module.exports, t = u.settings, data, mode;
  for (let i in t)
    if (t[i].settings) {
      data = t[i];
      mode = data.mode;
      break;
    }
  mode.anonymous_ships = true;
  for (let i=0;i<mode.teams.length;i++) {
    mode.teams[i].station_desc.hue = 60;
    mode.teams[i].hue = 60;
    mode.options.teams[i].hue = 60;
  }
  let tx = data.names.getData.bind(data.names);
  data.names.getData = function(u){
    let x = tx(u);
    if (x) x.hue = 60;
    return x
  }
  if (window.location.pathname == "/app.html") {
    for (let team of mode.teams) team.station_model.l0OO1.remove(...team.station_model.modules.map(i => i.l0OO1))
    mode.OOlOI.I1l11.IO000.stations = [];
    for (let team of mode.teams) {
      team.station_model = new StationModel(team.station_desc, team);
      mode.OOlOI.I1l11.IO000.addStation(team.station_model)
    }
    Rocket.prototype.read = function(t) {
      return this.x = t.getFloat32(10, !0), this.y = t.getFloat32(14, !0), this.IOlO1 = t.getFloat32(18, !0), this.I00l0 = t.getFloat32(22, !0), this.r = t.getFloat32(26, !0), this.target_r = t.getFloat32(30, !0), this.hue = 60, this.OOlOI.mode.anonymous_ships && this.shipid !== this.OOlOI.I1l11.ll0l1.status.id && (this.hue = (this.OOlOI.hue + 180) % 360), this.last_update = this.IO000.II1II
    }
    Mine.prototype.read = function(t) {
      return this.x = t.getFloat32(10, !0), this.y = t.getFloat32(14, !0), this.IOlO1 = t.getFloat32(18, !0), this.I00l0 = t.getFloat32(22, !0), this.hue = 60, this.OOlOI.mode.anonymous_ships && this.shipid !== this.OOlOI.I1l11.ll0l1.status.id && (this.hue = (this.OOlOI.hue + 180) % 360), this.last_update = this.IO000.II1II
    }
    Pods.prototype.getModelInstance = function(t) {
      var e, i, s;
      return null == this.models[t] && (i = "zinc", this.ll0l1 === this.OOlOI.ll0l1 ? this.OOlOI.ll1Ol.l01Ol() && (i = this.OOlOI.ll1Ol.custom.finish) : null != (e = this.OOlOI.names.getCustom(this.ll0l1.status.id)) && null != e.finish && (i = e.finish), this.models[t] = new WeaponModel(WeaponModel[t], 1/6, i)), s = this.models[t].l1I0O(), s.scale.x = .6 * this.models[t].data.size * 2, s.scale.y = .6 * this.models[t].data.size * 2, s.scale.z = .6 * this.models[t].data.size * 2, s
    }
  }
  else {
    for (let team of mode.teams) team.station_model.OIOOI.remove(...team.station_model.modules.map(i => i.OIOOI))
    mode.lO1I1.I110O.I11I0.stations = [];
    for (let team of mode.teams) {
      team.station_model = new StationModel(team.station_desc, team);
      mode.lO1I1.I110O.I11I0.addStation(team.station_model)
    }
    Pods.prototype.getModelInstance = function(t) {
      var e, i, s;
      return null == this.models[t] && (i = "zinc", this.l1OlO === this.lO1I1.l1OlO ? this.lO1I1.II11I.lI01O() && (i = this.lO1I1.II11I.custom.finish) : null != (e = this.lO1I1.names.getCustom(this.l1OlO.status.id)) && null != e.finish && (i = e.finish), this.models[t] = new WeaponModel(WeaponModel[t], 1/6, i)), s = this.models[t].l1010(), s.scale.x = .6 * this.models[t].data.size * 2, s.scale.y = .6 * this.models[t].data.size * 2, s.scale.z = .6 * this.models[t].data.size * 2, s
    }
    Mine.prototype.read = function(t) {
      return this.x = t.getFloat32(10, !0), this.y = t.getFloat32(14, !0), this.O1I0l = t.getFloat32(18, !0), this.O01OO = t.getFloat32(22, !0), this.hue = 60, this.lO1I1.mode.anonymous_ships && this.shipid !== this.lO1I1.I110O.l1OlO.status.id && (this.hue = (this.lO1I1.hue + 180) % 360), this.last_update = this.I11I0.IOlII
    }
    Rocket.prototype.read = function(t) {
      return this.x = t.getFloat32(10, !0), this.y = t.getFloat32(14, !0), this.O1I0l = t.getFloat32(18, !0), this.O01OO = t.getFloat32(22, !0), this.r = t.getFloat32(26, !0), this.target_r = t.getFloat32(30, !0), this.hue = 60, this.lO1I1.mode.anonymous_ships && this.shipid !== this.lO1I1.I110O.l1OlO.status.id && (this.hue = (this.lO1I1.hue + 180) % 360), this.last_update = this.I11I0.IOlII
    }
  }
}
catch(e){console.log(e)};
