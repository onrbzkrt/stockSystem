<div class="col-12">
    <div class="alert alert-primary border shadow-lg">
        <h5>{{ $res->name }} ({{ $res->symbol }}) - {{ $res->stockBase->marketClose != null ? $res->stockBase->marketClose : "0" }} {{ $res->currency }}</h5>
        <small>{{ isset($res->description) && !empty($res->description) && $res->description != null ? $res->description : "" }}</small>
    </div>
</div>
<div class="col-4">
    <div class="alert bg-success border "><small>Market Cap</small><br>{{ $res->stockBase->marketCap != null ? thousandsCurrencyFormat($res->stockBase->marketCap) : "0" }}</div>
</div>
<div class="col-4">
    <div class="alert bg-danger border "><small>EPS</small><br>{{ $res->stockBase->EPS != null ? $res->stockBase->EPS : "0" }}</div>
</div>
<div class="col-4">
    <div class="alert bg-primary border "><small>PE</small><br>{{ $res->stockBase->PE != null ? $res->stockBase->PE : "0" }}</div>
</div>
<div class="col-2">
    <div class="alert bg-secondary border "><small>Oscillators Rating</small><br>{{ $res->get1min->oscillatorsRating != null ? $res->get1min->oscillatorsRating : "0" }}</div>
</div>
<div class="col-2">
    <div class="alert bg-success border "><small>ADX</small><br>{{ $res->get1min->ADX != null ? $res->get1min->ADX : "0" }}</div>
</div>
<div class="col-2">
    <div class="alert bg-danger border "><small>AO</small><br>{{ $res->get1min->AO != null ? $res->get1min->AO : "0" }}</div>
</div>
<div class="col-2">
    <div class="alert bg-warning text-dark border "><small>ATR</small><br>{{ $res->get1min->ATR != null ? $res->get1min->ATR : "0" }}</div>
</div>
<div class="col-2">
    <div class="alert bg-info text-dark border "><small>CCI20</small><br>{{ $res->get1min->CCI20 != null ? $res->get1min->CCI20 : "0" }}</div>
</div>
<div class="col-2">
    <div class="alert bg-primary border "><small>macdLevel</small><br>{{ $res->get1min->macdLevel != null ? $res->get1min->macdLevel : "0" }}</div>
</div>
<div class="col-3">
    <div class="alert alert-warning text-dark border "><small>macdSignal</small><br>{{ $res->get1min->macdSignal != null ? $res->get1min->macdSignal : "0" }}</div>
</div>
<div class="col-3">
    <div class="alert alert-success text-dark border "><small>RSI14</small><br>{{ $res->get1min->RSI14 != null ? $res->get1min->RSI14 : "0" }}</div>
</div>
<div class="col-3">
    <div class="alert alert-danger text-dark border "><small>stochK</small><br>{{ $res->get1min->stochK != null ? $res->get1min->stochK : "0" }}</div>
</div>
<div class="col-3">
    <div class="alert alert-secondary text-dark border "><small>stochD</small><br>{{ $res->get1min->stochD != null ? $res->get1min->stochD : "0" }}</div>
</div>
