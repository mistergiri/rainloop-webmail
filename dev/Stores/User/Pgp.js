(function () {

	'use strict';

	var
		ko = require('ko')
	;

	/**
	 * @constructor
	 */
	function PgpUserStore()
	{
		this.capaOpenPGP = ko.observable(false);
		
		this.openpgp = null;

		this.openpgpkeys = ko.observableArray([]);
		this.openpgpKeyring = null;

		this.openpgpkeysPublic = this.openpgpkeys.filter(function (oItem) {
			return !!(oItem && !oItem.isPrivate);
		});

		this.openpgpkeysPrivate = this.openpgpkeys.filter(function (oItem) {
			return !!(oItem && oItem.isPrivate);
		});
	}

//	PgpUserStore.prototype.sign = function (sText, oPrivateKey)
//	{
//		try
//		{
//			return this.openpgp.signClearMessage([oPrivateKey], sText);
//		}
//		catch (oExc) {}
//
//		return sText;
//	};
//
//	PgpUserStore.prototype.encrypt = function (sText, aPublicKeys)
//	{
//		try
//		{
//			return this.openpgp.encryptMessage(aPublicKeys, sText);
//		}
//		catch (oExc) {}
//
//		return sText;
//	};
//
//	PgpUserStore.prototype.signAndEncrypt = function (sText, aPublicKeys, oPrivateKey)
//	{
//		try
//		{
//			return this.openpgp.signAndEncryptMessage(aPublicKeys, oPrivateKey, sText);
//		}
//		catch (oExc) {}
//
//		return sText;
//	};
//
//	/**/
//
//	PgpUserStore.prototype.verify = function (sText, aPublicKeys)
//	{
//		var
//			mPgpMessage = null
//		;
//
//		try
//		{
//			mPgpMessage = this.openpgp.cleartext.readArmored(sText);
//			if (mPgpMessage && mPgpMessage.getText)
//			{
//				mPgpMessage.verify(aPublicKeys);
//			}
//		}
//		catch (oExc) {}
//
//		return false;
//	};
//
//	PgpUserStore.prototype.decryptAndVerify = function (sEnctyptedText, aPublicKeys, oPivateKey)
//	{
//		var
//			mPgpMessageDecrypted = null,
//			mPgpMessage = null
//		;
//
//		try
//		{
//			mPgpMessage = this.openpgp.message.readArmored(sEnctyptedText);
//			if (mPgpMessage && oPivateKey && mPgpMessage.decrypt)
//			{
//				mPgpMessageDecrypted = mPgpMessage.decrypt(oPivateKey);
//				if (mPgpMessageDecrypted)
//				{
//					mPgpMessageDecrypted.verify(aPublicKeys);
//				}
//			}
//		}
//		catch (oExc) {}
//
//		return false;
//	};

	/**
	 * @return {boolean}
	 */
	PgpUserStore.prototype.isSupported = function ()
	{
		return !!this.openpgp;
	};

	module.exports = new PgpUserStore();

}());

