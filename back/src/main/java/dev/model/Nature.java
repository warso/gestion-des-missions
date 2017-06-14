package dev.model;

public class Nature {
	private int id;
	private String type;
	private boolean facture;
	private boolean prime;
	private float pourcentagePrime;
	private float tauxJournalierMoyen;
	private boolean depassementFrais;
	private float plafond;

	public Nature() {
		super();
	}

	public Nature(String type, boolean facture, boolean prime, float pourcentagePrime, float tauxJournalierMoyen,
			boolean depassementFrais, float plafond) {
		super();
		this.type = type;
		this.facture = facture;
		this.prime = prime;
		this.pourcentagePrime = pourcentagePrime;
		this.tauxJournalierMoyen = tauxJournalierMoyen;
		this.depassementFrais = depassementFrais;
		this.plafond = plafond;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isFacture() {
		return facture;
	}

	public void setFacture(boolean facture) {
		this.facture = facture;
	}

	public boolean isPrime() {
		return prime;
	}

	public void setPrime(boolean prime) {
		this.prime = prime;
	}

	public float getPourcentagePrime() {
		return pourcentagePrime;
	}

	public void setPourcentagePrime(float pourcentagePrime) {
		this.pourcentagePrime = pourcentagePrime;
	}

	public float getTauxJournalierMoyen() {
		return tauxJournalierMoyen;
	}

	public void setTauxJournalierMoyen(float tauxJournalierMoyen) {
		this.tauxJournalierMoyen = tauxJournalierMoyen;
	}

	public boolean isDepassementFrais() {
		return depassementFrais;
	}

	public void setDepassementFrais(boolean depassementFrais) {
		this.depassementFrais = depassementFrais;
	}

	public float getPlafond() {
		return plafond;
	}

	public void setPlafond(float plafond) {
		this.plafond = plafond;
	}

}
