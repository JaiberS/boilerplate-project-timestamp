class TimestampController {

  async timeStamp(req, res) {
    console.log(`TimestampController.timeStamp : REQUEST--> ${JSON.stringify(req.params)}`);
    try {
      let date = req.params.date;
      if (date === undefined) date = new Date(Date.now());
      else if (/^\d+$/.test(date)) date = new Date(Number(date));
      else date = new Date(date);
      
      if (date == 'Invalid Date') throw new Error('Invalid Date');

      res.json({ unix: date.getTime(), utc: date.toUTCString() });
    } catch (error) {
      console.error(`error:${error}`);
      res.status(error.statusCode || 400).json({ error: 'Invalid Date' });
    }
  }
}

module.exports = new TimestampController();
