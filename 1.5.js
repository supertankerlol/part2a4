    function dateDifference(startDate, endDate) {
    const diffMilliseconds = endDate - startDate;
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    return {
        milliseconds: diffMilliseconds,
        seconds: diffSeconds,
        minutes: diffMinutes,
        hours: diffHours,
        days: diffDays,
    };
    }

    const startDate = new Date('2022-02-15');
    const endDate = new Date('2022-03-15');
    const difference = dateDifference(startDate, endDate);
    console.log(difference);