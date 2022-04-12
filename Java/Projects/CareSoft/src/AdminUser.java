import java.util.ArrayList;
import java.util.Date;
public class AdminUser extends User implements HIPAACompliantUser,  HIPAACompliantAdmin {
//... imports class definition...
    
    // Inside class:
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser(Integer id, String role) {
		super();
		this.employeeID = id;
		this.role = role;
	}
    // TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    @Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		return null;
	}
    
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
   
	public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
    
    // TO DO: Setters & Getters
    
    public boolean assignPIN(int pin) {
    	if(pin>=100000 && pin<=999999+1) return true;
    	return false;
    }
    
    @Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if(id == confirmedAuthID) {
			return true;
		}
		return false;
	}
    
    public Integer getEmployeeId() {
		return this.employeeID;
	}
	
	public Integer getId() {
		return this.id;
	}
	
	public String getRole() {
		return this.role;
	}

}
