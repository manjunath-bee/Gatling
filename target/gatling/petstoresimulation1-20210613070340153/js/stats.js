var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180",
        "ok": "180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5284",
        "ok": "5284",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1340",
        "ok": "1340",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "699",
        "ok": "699",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1102",
        "ok": "1102",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1255",
        "ok": "1255",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3005",
        "ok": "3005",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4090",
        "ok": "4090",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 128,
    "percentage": 71
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 52,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.994",
        "ok": "0.994",
        "ko": "-"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "180",
        "ok": "180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5284",
        "ok": "5284",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1340",
        "ok": "1340",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "699",
        "ok": "699",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1102",
        "ok": "1102",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1255",
        "ok": "1255",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3005",
        "ok": "3005",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4090",
        "ok": "4090",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 128,
    "percentage": 71
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 52,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.994",
        "ok": "0.994",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
