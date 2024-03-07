const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const connection = require('../connection');

class LicenseService {
  generateLicense(userId, expirationDate) {
    const licenseKey = uuid.v4();
    const licenseToken = jwt.sign({ userId, licenseKey, expirationDate }, process.env.LICENSE_SECRET);
    return { key: licenseKey, token: licenseToken };
  }

  assignLicenseToCustomer(customerId, licenseKey) {
    const query = 'UPDATE customers SET licenseKey = ? WHERE id = ?';
    connection.query(query, [licenseKey, customerId], (err, results) => {
      if (err) {
        console.error('Error assigning license to customer:', err);
      } else {
        console.log('License assigned to customer successfully');
      }
    });
  }

  validateLicense(token) {
    try {
      const decoded = jwt.verify(token, process.env.LICENSE_SECRET);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}

module.exports = LicenseService;
